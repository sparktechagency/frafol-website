import ForumDetailsPage from "@/components/Forum/ForumDetailsPage";
import Container from "@/components/ui/Container";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { ICommunityPost } from "@/types/communityForum.type";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const id = await params?.id;
  const res = await fetchWithAuth(`/community/${id}`, {
    next: {
      tags: [TagTypes.communityForum],
    },
  });

  const data = await res.json();

  console.log(data);
  const communityPosts: ICommunityPost = data?.data || {};
  return (
    <main>
      <Container>
        <ForumDetailsPage communityPosts={communityPosts} />
      </Container>
    </main>
  );
};

export default page;
