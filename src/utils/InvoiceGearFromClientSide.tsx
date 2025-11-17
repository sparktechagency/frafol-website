/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  // Font,
} from "@react-pdf/renderer";
import { formatDate, formetTime } from "@/utils/dateFormet";
import { IGearOrder } from "@/types";
import { AllImages } from "../../public/assets/AllImages";

// Font.register({
//   family: "Roboto",
//   src: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
// });

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#efefef",
    padding: 30,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#ad2b08",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  section: {
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ad2b08",
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    color: "#333",
    marginBottom: 2,
  },
  image: {
    width: 150,
    height: 50,
  },
  table: {
    width: "100%",
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ddd",
    padding: "6px 0",
  },
  tableCell: {
    width: "25%",
    textAlign: "center",
    fontSize: 10,
  },
  highlightText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ad2b08",
  },
});

const InvoiceGearFromClientSide = ({
  currentRecord,
}: {
  currentRecord: IGearOrder;
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Main Header */}
        <Text style={styles.header}>I N V O I C E</Text>

        {/* Invoice Top Section */}
        <View style={styles.headerSection}>
          <Image src={AllImages.logo.src} style={styles.image} />
          <View>
            <Text style={styles.text}>Invoice No: {currentRecord.orderId}</Text>
            <Text style={styles.text}>
              Invoice Date: {formatDate(currentRecord.createdAt)} at{" "}
              {formetTime(currentRecord.createdAt)}
            </Text>
            <Text style={styles.text}>
              Delivery Date:{"--"}
              {/* {currentRecord.statusTimestamps.deliveredAt
              ? formatDate(currentRecord.statusTimestamps.deliveredAt)
              : "Pending"} */}
            </Text>
          </View>
        </View>

        {/* Seller Information */}
        <View
          style={{
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.section}>
            <Text style={styles.subHeader}>S E L L E R</Text>
            <Text style={styles.text}>Name: {currentRecord.sellerId.name}</Text>
            <Text style={styles.text}>
              Email: {currentRecord.sellerId.email}
            </Text>
            <Text style={styles.text}>Phone: Not Provided</Text>
          </View>

          {/* Client Information */}
          <View style={{ ...styles.section }}>
            <Text style={styles.subHeader}>B U Y E R</Text>
            <Text style={styles.text}>Name: {currentRecord.clientId.name}</Text>
            <Text style={styles.text}>
              Email: {currentRecord.clientId.email}
            </Text>
            <Text style={styles.text}>
              Address: {currentRecord.shippingAddress}
            </Text>
            <Text style={styles.text}>Town: {currentRecord.town}</Text>
            <Text style={styles.text}>Post Code: {currentRecord.postCode}</Text>
            <Text style={styles.text}>
              Mobile: {currentRecord.mobileNumber}
            </Text>
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>G E A R D E T A I L S</Text>
          <Text style={styles.text}>
            Product: {currentRecord.gearMarketplaceId.name}
          </Text>
          <Text style={styles.text}>
            Condition: {currentRecord.gearMarketplaceId.condition}
          </Text>
          <Text style={styles.text}>
            Description: {currentRecord.gearMarketplaceId.description}
          </Text>
          <Text style={styles.text}>
            Shipping Company:{" "}
            {currentRecord.gearMarketplaceId.shippingCompany.name} ( €
            {currentRecord.gearMarketplaceId.shippingCompany.price})
          </Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View
            style={{
              ...styles.tableRow,
              backgroundColor: "#ad2b08",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Text style={styles.tableCell}>Product</Text>
            <Text style={styles.tableCell}>Qty</Text>
            <Text style={styles.tableCell}>Price</Text>
            <Text style={styles.tableCell}>Total</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {currentRecord.gearMarketplaceId.name}
            </Text>
            <Text style={styles.tableCell}>1 pc</Text>
            <Text style={styles.tableCell}>
              €{currentRecord.gearMarketplaceId.price}
            </Text>
            <Text style={styles.tableCell}>
              €{currentRecord.gearMarketplaceId.price}
            </Text>
          </View>

          {/* Shipping */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Shipping</Text>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>
              €{currentRecord.gearMarketplaceId.shippingCompany.price}
            </Text>
            <Text style={styles.tableCell}>
              €{currentRecord.gearMarketplaceId.shippingCompany.price}
            </Text>
          </View>
        </View>

        {/* Totals */}
        <View style={{ marginTop: 40 }}>
          <Text style={styles.highlightText}>
            SUBTOTAL: €
            {currentRecord.gearMarketplaceId.price +
              currentRecord.gearMarketplaceId.shippingCompany.price}
          </Text>

          <Text style={styles.highlightText}>
            TOTAL: €
            {currentRecord.gearMarketplaceId.price +
              currentRecord.gearMarketplaceId.shippingCompany.price}
          </Text>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 60, textAlign: "center" }}>
          <Text style={styles.text}>
            This invoice was auto generated by the marketplace system.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceGearFromClientSide;
