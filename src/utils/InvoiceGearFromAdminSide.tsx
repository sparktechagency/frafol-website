/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { formatDate, formetTime } from "@/utils/dateFormet"; // Your date formatting functions
import { IGearOrder } from "@/types";
import { AllImages } from "../../public/assets/AllImages";

Font.register({
  family: "Roboto",
  src: "https://fonts.googleapis.com/css2?family=Playwrite+SK:wght@100..400&display=swap",
});

const styles = StyleSheet.create({
  page: { backgroundColor: "#efefef", padding: 30 },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#ad2b08",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  section: { marginBottom: 10 },
  subHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ad2b08",
    marginBottom: 5,
  },
  text: { fontSize: 10, color: "#2c2c2c" },
  table: { width: "100%", marginTop: 20 },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ddd",
    padding: "5px 0",
  },
  tableCell: { width: "25%", textAlign: "center", fontSize: 10 },
  highlightText: { fontSize: 12, fontWeight: "bold", color: "#ad2b08" },
  image: { width: 200, height: "auto", objectFit: "cover" },
});

const InvoiceGearFromAdminSide = ({
  currentRecord,
}: {
  currentRecord: IGearOrder;
}) => {

  console.log(currentRecord)
  const subtotal = currentRecord.gearMarketplaceId.mainPrice;
  const vatAmount = Number(currentRecord.gearMarketplaceId.vatAmount);
  const total =
    subtotal + (currentRecord.gearMarketplaceId.shippingCompany?.price || 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>F A K T Ú R A / I N V O I C E</Text>
        <View style={{ ...styles.headerSection, alignItems: "center" }}>
          <Image src={AllImages.logo.src} style={styles.image} />
          <View style={styles.section}>
            <Text style={styles.text}>
              Číslo faktúry: {currentRecord.orderId}
            </Text>
            <Text style={styles.text}>
              Dátum vystavenia: {formatDate(currentRecord.createdAt)} at{" "}
              {formetTime(currentRecord.createdAt)}
            </Text>
            <Text style={styles.text}>Dátum dodania služby:{"--"}</Text>
          </View>
        </View>

        {/* Supplier & Client */}
        <View style={styles.headerSection}>
          {/* Supplier */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>DODÁVATEĽ</Text>
            <Text style={styles.text}>
              DODÁVATEĽ: {currentRecord.sellerId.name}
            </Text>
            <Text style={styles.text}>
              Email: {currentRecord.sellerId.email}
            </Text>
          </View>

          {/* Client */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>OBERATE / CLIENT</Text>
            <Text style={styles.text}>Name: {currentRecord.clientId.name}</Text>
            <Text style={styles.text}>
              Email: {currentRecord.clientId.email}
            </Text>
            <Text style={styles.text}>
              Shipping Address: {currentRecord.shippingAddress}
            </Text>
          </View>
        </View>

        {/* Event / Product Details */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>ORDER DETAILS</Text>
          <Text style={styles.text}>
            Product: {currentRecord.gearMarketplaceId.name}
          </Text>
          <Text style={styles.text}>
            Order Date: {formatDate(currentRecord.createdAt)} at{" "}
            {formetTime(currentRecord.createdAt)}
          </Text>
          <Text style={styles.text}>
            Location: {currentRecord.shippingAddress}
          </Text>
          <Text style={styles.text}>
            Condition: {currentRecord.gearMarketplaceId.condition}
          </Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View
            style={{
              ...styles.tableRow,
              backgroundColor: "#ad2b08",
              color: "white",
            }}
          >
            <Text style={styles.tableCell}>PRODUKT/Servisný</Text>
            <Text style={styles.tableCell}>MNOŽSTVO</Text>
            <Text style={styles.tableCell}>CENA</Text>
            <Text style={styles.tableCell}>SPOLU</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {currentRecord.gearMarketplaceId.name}
            </Text>
            <Text style={styles.tableCell}>1 pc</Text>
            <Text style={styles.tableCell}>€{subtotal.toFixed(2)}</Text>
            <Text style={styles.tableCell}>€{subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Shipping</Text>
            <Text style={styles.tableCell}>1 pc</Text>
            <Text style={styles.tableCell}>
              €
              {currentRecord.gearMarketplaceId.shippingCompany?.price.toFixed(
                2
              )}
            </Text>
            <Text style={styles.tableCell}>
              €
              {currentRecord.gearMarketplaceId.shippingCompany?.price.toFixed(
                2
              )}
            </Text>
          </View>
        </View>

        {/* Totals */}
        <View style={{ ...styles.section, marginTop: 50 }}>
          <Text style={styles.highlightText}>
            MEDZISÚČET: €{subtotal.toFixed(2)}
          </Text>
          <Text style={styles.highlightText}>DPH: {vatAmount}%</Text>
          <Text style={styles.highlightText}>SPOLU: €{total.toFixed(2)}</Text>
        </View>

        {/* Footer */}
        <View style={{ ...styles.section, textAlign: "center", marginTop: 50 }}>
          <Text style={styles.text}>
            Táto faktúra bola automaticky vygenerovaná prostredníctvom platformy
            Frafol.
          </Text>
          <Text style={{ ...styles.text, color: "#ad2b08" }}>
            This invoice was automatically generated via the platform frafol.sk.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceGearFromAdminSide;
