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
import { formatDate } from "@/utils/dateFormet";
import { IEventOrder } from "@/types";
import { AllImages } from "../../public/assets/AllImages";

Font.register({
  family: "Roboto",
  src: "https://fonts.googleapis.com/css2?family=Playwrite+SK:wght@100..400&display=swap",
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
  textBold: {
    fontSize: 10,
    color: "#2c2c2c",
    fontWeight: "bold",
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
    color: "white",
  },
  tableCellDark: {
    width: "25%",
    textAlign: "center",
    fontSize: 10,
    color: "#2c2c2c",
  },
  highlightText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ad2b08",
  },
  topRightSection: {
    position: "absolute",
    top: 30,
    right: 30,
    alignItems: "flex-end",
  },
  image: {
    width: 200,
    height: "auto",
    objectFit: "cover",
  },
});

// Invoice document structure
const InvoiceDocumentFromClientSide = ({
  currentRecord,
}: {
  currentRecord: IEventOrder;
}) => {
  // Calculate values
  const subtotal = currentRecord.price || 0;
  const serviceFee = (currentRecord.priceWithServiceFee || 0) - subtotal;
  const vatAmount = currentRecord.vatAmount || 0;
  const vatPercentage = subtotal > 0 ? Math.round((vatAmount / subtotal) * 100) : 0;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Invoice Header */}
        <Text style={styles.header}>F A K T Ú R A / I N V O I C E</Text>
        <View style={{ ...styles.headerSection, alignItems: "center" }}>
          <Image src={AllImages.logo.src} style={styles.image} />
          <View style={styles.section}>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Číslo faktúry / Invoice number:</Text> {currentRecord.orderId}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Dátum vystavenia / Issue date:</Text> {formatDate(currentRecord.createdAt)}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Dátum dodania služby / Date of service delivery:</Text>{" "}
              {formatDate(currentRecord.deliveryDate || currentRecord.date)}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.headerSection, flexDirection: "column" }}>
          {/* Supplier Information */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>
              <Text style={styles.text}>
                <Text style={styles.textBold}>              DODÁVATEĽ / SUPPLIER :</Text> {currentRecord.serviceType === "photography"
                  ? "Photographer"
                  : currentRecord.serviceType === "videography" ?
                    "Videographer" : "Both"}

              </Text>

            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Meno / Name:</Text> {currentRecord.serviceProviderId.name}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Názov firmy / Company name:</Text>{" "}
              {currentRecord.serviceProviderId.companyName || "____"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Adresa sídla / Company address:</Text>{" "}
              {currentRecord.serviceProviderId.address || "__"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>IČO / Company ID:</Text> {currentRecord.serviceProviderId.ico || "__________"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>DIČ / Tax ID (if company):</Text>{" "}
              {currentRecord.serviceProviderId.dic || "__________"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>IČ DPH / VAT ID (if VAT payer):</Text>{" "}
              {currentRecord.serviceProviderId.ic_dph || "____"}
            </Text>
          </View>

          {/* Client Information */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>OBERATE / CLIENT</Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Meno / Name or company name:</Text>{" "}
              {currentRecord.userId.companyName || currentRecord.userId.name || "___"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Adresa sídla / Address:</Text> {currentRecord.userId.address || "__________"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>IČO / Company ID (if company):</Text> {currentRecord.userId.ico || "__"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>DIČ / Tax ID (if company):</Text> {currentRecord.userId.dic || "____"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>IČ DPH / VAT ID (if VAT payer):</Text> {currentRecord.userId.ic_dph || "____"}
            </Text>
          </View>
        </View>

        {/* Delivery Address */}
        {/* {currentRecord.streetAddress && (
          <View style={{ ...styles.section, marginBottom: 20 }}>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Dodacia adresa / Delivery address (if different from billing for
                marketplace):</Text>
            </Text>
            <Text style={styles.text}>
              {currentRecord.streetAddress}, {currentRecord.town},{" "}
              {currentRecord.country}
            </Text>
          </View>
        )} */}

        {/* Product/Service Table */}
        <View style={styles.table}>
          <View
            style={{
              ...styles.tableRow,
              backgroundColor: "#ad2b08",
              color: "white",
            }}
          >
            <Text style={styles.tableCell}>PRODUKT / PRODUCT</Text>
            <Text style={styles.tableCell}>MNOŽSTVO / QTY</Text>
            <Text style={styles.tableCell}>CENA / PRICE</Text>
            <Text style={styles.tableCell}>SPOLU / TOTAL</Text>
          </View>

          {/* Main Service */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCellDark}>
              {currentRecord.packageId?.title || "Service Package"} /{" "}
              {currentRecord.serviceType === "photography"
                ? "Wedding video"
                : "Wedding photography"}
            </Text>
            <Text style={styles.tableCellDark}>1 ks/pc</Text>
            <Text style={styles.tableCellDark}>€{subtotal.toFixed(2)}</Text>
            <Text style={styles.tableCellDark}>€{subtotal.toFixed(2)}</Text>
          </View>

          {/* Service Fee */}
          {serviceFee > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCellDark}>
                Servisný poplatok / Service fee
              </Text>
              <Text style={styles.tableCellDark}>1 ks / pc</Text>
              <Text style={styles.tableCellDark}>€{serviceFee.toFixed(2)}</Text>
              <Text style={styles.tableCellDark}>€{serviceFee.toFixed(2)}</Text>
            </View>
          )}
        </View>

        {/* Subtotal and Total */}
        <View style={{ ...styles.section, marginTop: 50, alignItems: "flex-end" }}>
          <Text style={{ ...styles.text, marginBottom: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#000000" }}>MEDZISÚČET / </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>SUBTOTAL: </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>
              €{(currentRecord.priceWithServiceFee || subtotal).toFixed(2)}
            </Text>
          </Text>
          <Text style={{ ...styles.text, marginBottom: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#000000" }}>DPH ({vatPercentage}%) / </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>VAT ({vatPercentage}%): </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>
              €{vatAmount.toFixed(2)}
            </Text>
          </Text>
          <Text style={{
            ...styles.text,
            backgroundColor: "#ad2b08",
            color: "white",
            padding: 8,
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 5,
            fontWeight: "bold",
            fontSize: 12
          }}>
            <Text>SPOLU / TOTAL: </Text>
            <Text>€{(currentRecord.totalPrice as number).toFixed(2)}</Text>
          </Text>
        </View>

        {/* Footer */}
        <View style={{ ...styles.section, textAlign: "center", marginTop: 80 }}>
          <Text style={styles.text}>
            Táto faktúra bola automaticky vygenerovaná prostredníctvom platformy
            frafol.sk.
          </Text>
          <Text style={{ ...styles.text, color: "#ad2b08" }}>
            This invoice was automatically generated via the platform frafol.sk.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocumentFromClientSide;