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
import { IEventOrder } from "@/types";
import { AllImages } from "../../public/assets/AllImages";

Font.register({
  family: "Roboto",
  src: "https://fonts.googleapis.com/css2?family=Playwrite+SK:wght@100..400&display=swap", // or use local path if you have downloaded the font
});

// Create styles for the PDF using @react-pdf/renderer's StyleSheet
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#efefef",
    padding: 30,
  },
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
    color: "#2c2c2c",
  },
  table: {
    width: "100%",
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ddd",
    padding: "5px 0",
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
  topRightSection: {
    position: "absolute",
    top: 30, // Distance from the top of the page
    right: 30, // Distance from the right edge of the page
    alignItems: "flex-end", // Align the content to the right
  },
  image: {
    width: 200,
    height: "auto",
    objectFit: "cover",
  },
});

// Invoice document structure
const InvoiceDocumentFromAdminSide = ({
  currentRecord,
}: {
  currentRecord: IEventOrder;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Invoice Header */}
      <Text style={styles.header}>F A K T Ú R A / I N V O I C E</Text>
      <View style={{ ...styles.headerSection, alignItems: "center" }}>
        <Image
          src={AllImages.logo.src} // Replace with your actual logo path
          style={styles.image}
        />
        <View style={styles.section}>
          <Text style={styles.text}>
            Číslo faktúry: {currentRecord.orderId}
          </Text>
          <Text style={styles.text}>
            Dátum vystavenia: {formatDate(currentRecord.createdAt)} at{" "}
            {formetTime(currentRecord.createdAt)}
          </Text>
          <Text style={styles.text}>
            Dátum dodania služby: {formatDate(currentRecord.deliveryDate)}
          </Text>
        </View>
      </View>
      <View style={styles.headerSection}>
        {/* Supplier Information */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>DODÁVATEĽ</Text>
          <Text style={styles.text}>
            DODÁVATEĽ : {currentRecord.serviceProviderId.companyName}
          </Text>
          <Text style={styles.text}>
            Názov firmy : {currentRecord.serviceProviderId.address}
          </Text>
          <Text style={styles.text}>
            {"Adresa sídla"}:{" "}
            {" " + currentRecord.serviceProviderId.ico || "--------"}
          </Text>
          <Text style={styles.text}>
            {"DIC"}: {" " + currentRecord.serviceProviderId.dic || "--------"}
          </Text>
          <Text style={styles.text}>
            {"IC DPH"}:{" "}
            {" " + currentRecord.serviceProviderId.ic_dph || "--------"}
          </Text>
          <Text style={styles.text}>
            Telefón: {currentRecord.serviceProviderId.phone}
          </Text>
          <Text style={styles.text}>
            Email: {currentRecord.serviceProviderId.email}
          </Text>
        </View>

        {/* Client Information */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>OBERATE / CLIENT</Text>
          <Text style={styles.text}>Name: {currentRecord.userId.name}</Text>
          <Text style={styles.text}>
            Address: {currentRecord.userId.address}
          </Text>
          <Text style={styles.text}>
            IČO: {currentRecord.userId.ico || "--------"}
          </Text>
          <Text style={styles.text}>
            DIC: {currentRecord.userId.dic || "--------"}
          </Text>
          <Text style={styles.text}>
            IČ DPH: {currentRecord.userId.ic_dph || "--------"}
          </Text>
        </View>
      </View>

      {/* Event Details */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>EVENT DETAILS</Text>
        <Text style={styles.text}>Service: {currentRecord.serviceType}</Text>
        <Text style={styles.text}>
          Event Date: {formatDate(currentRecord.date)} at{" "}
          {formetTime(currentRecord.time)}
        </Text>
        <Text style={styles.text}>Location: {currentRecord.location}</Text>
        <Text style={styles.text}>
          Package: {currentRecord.packageId?.title}
        </Text>
      </View>

      {/* Product/Service Table */}
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
          <Text style={styles.tableCell}>{currentRecord.packageId?.title}</Text>
          <Text style={styles.tableCell}>1 pc</Text>
          <Text style={styles.tableCell}>€{currentRecord.price}</Text>
          <Text style={styles.tableCell}>€{currentRecord.price}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Servisný poplatok</Text>
          <Text style={styles.tableCell}>1 pc</Text>
          <Text style={styles.tableCell}>
            {Number(currentRecord?.totalPrice) -
              (Number(currentRecord.price) + Number(currentRecord.vatAmount))}
            €
          </Text>
          <Text style={styles.tableCell}>
            {Number(currentRecord.totalPrice) -
              (Number(currentRecord.price) + Number(currentRecord.vatAmount))}
            €
          </Text>
        </View>
      </View>

      {/* Subtotal and Total */}
      <View style={{ ...styles.section, marginTop: 100 }}>
        <Text style={styles.highlightText}>
          MEDZISÚČET:{" "}
          {Number(currentRecord.totalPrice) - Number(currentRecord.vatAmount)}€
        </Text>
        <Text style={styles.highlightText}>
          DPH {Number(currentRecord.price) / Number(currentRecord.vatAmount)}%:{" "}
          {currentRecord.vatAmount}€
        </Text>
        <Text style={styles.highlightText}>
          SPOLU: {currentRecord.totalPrice}€
        </Text>
      </View>

      {/* Footer */}
      <View style={{ ...styles.section, textAlign: "center", marginTop: 100 }}>
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

export default InvoiceDocumentFromAdminSide;
