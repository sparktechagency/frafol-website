/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect } from "react";
import ReuseInput from "./ReuseInput";
import { SearchOutlined } from "@ant-design/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Form } from "antd";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  const [form] = Form.useForm();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e.target.value);
  };

  const debounceSearch = debounce((value: string) => {
    const text = value;
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("search", text);
      params.set("page", "1");
    } else {
      params.delete("search");
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  }, 200);

  function debounce<T extends (...args: any[]) => void>(
    this: void, // Explicitly type `this` as `void`
    func: T,
    wait: number
  ) {
    let timeout: NodeJS.Timeout;
    return function (...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait); // Use spread operator for arguments
    };
  }

  useEffect(() => {
    const text = searchParams.get("search");
    if (text) {
      form.setFieldsValue({ search: text });
    } else {
      form.resetFields();
    }
  }, [searchParams, form]);
  return (
    <div className="flex gap-4 items-center">
      <Form form={form}>
        <ReuseInput
          name="search"
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          inputClassName="!bg-primary-color !text-base-color !border-[#E1E1E1]"
          prefix={<SearchOutlined className="text-[#667185] text-xl mr-2" />}
        />
      </Form>
    </div>
  );
};

export default SearchInput;
