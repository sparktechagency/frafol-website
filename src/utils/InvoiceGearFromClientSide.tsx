/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { formatDate } from "@/utils/dateFormet";
import { IGearOrder } from "@/types";
import { AllImages } from "../../public/assets/AllImages";

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
  image: {
    width: 200,
    height: "auto",
    objectFit: "cover",
  },
});

const InvoiceGearFromClientSide = ({
  currentRecord,
}: {
  currentRecord: IGearOrder;
}) => {

  console.log(currentRecord)


  // Calculate values from your data structure
  const gearPrice = currentRecord.gearMarketplaceId.price || 0;
  const shippingPrice = currentRecord.gearMarketplaceId.shippingCompany.price || 0;
  const vatPercentage = currentRecord.gearMarketplaceId.vatAmount || 0;
  const platformCommission = currentRecord.gearMarketplaceId.mainPrice - (gearPrice + (gearPrice * vatPercentage / 100)) || 0;


  // Calculate subtotal (gear + shipping + commission)
  const subtotal = gearPrice + shippingPrice + platformCommission;

  // Calculate VAT amount in euros
  const vatAmount = (gearPrice * vatPercentage) / 100;

  // Calculate total
  const total = subtotal + vatAmount;


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Invoice Header */}
        <Text style={styles.header}>F A K T Ú R A / I N V O I C E</Text>
        <View style={{ ...styles.headerSection, alignItems: "center" }}>
          <Image src={AllImages.logo.src} style={styles.image} />
          <View style={styles.section}>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Císlo faktúry / Invoice number:</Text> [{currentRecord.orderId}]
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Dátum vystavenia / Issue date:</Text> {formatDate(currentRecord.createdAt)}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Dátum dodania služby / Date of service delivery:</Text>{" "}
              {currentRecord.statusTimestamps?.deliveredAt
                ? formatDate(currentRecord.statusTimestamps.deliveredAt)
                : "[dd.mm.yyyy]"}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.headerSection, flexDirection: "column" }}>
          {/* Supplier Information (Seller) */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>
              DODÁVATEĽ / SUPPLIER (Photographer / Videographer)
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Názov firmy / Company name:</Text>{" "}
              {currentRecord?.sellerId?.companyName || "____"}
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textBold}>Adresa sídla / Company address:</Text>{" "}
              {currentRecord?.sellerId?.address || "____"}
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textBold}>ICO / Company ID:</Text>{" "}
              {currentRecord?.sellerId?.ico || "__________"}
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textBold}>DIC / Tax ID (if company):</Text>{" "}
              {currentRecord?.sellerId?.dic || "__________"}
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textBold}>IC DPH / VAT ID (if VAT payer):</Text>{" "}
              {currentRecord?.sellerId?.ic_dph || "__________"}
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textBold}>Email:</Text>{" "}
              {currentRecord?.sellerId?.email || "____"}
            </Text>

            <Text style={styles.text}>
              <Text style={styles.textBold}>Phone:</Text>{" "}
              {currentRecord?.sellerId?.phone || "____"}
            </Text>
          </View>

          {/* Client Information (Buyer) */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>ODBERATEĽ / CLIENT</Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Meno / Name or company name:</Text>{" "}
              {currentRecord?.clientId?.companyName || currentRecord?.clientId?.name || currentRecord.name || "___"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Adresa sídla / Address:</Text>{" "}
              {currentRecord?.clientId?.address || currentRecord.shippingAddress || "__________"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>ICO / Company ID (if company):</Text> {currentRecord?.clientId?.ico || "__"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>DIC / Tax ID (if company):</Text> {currentRecord?.clientId?.dic || "____"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>IC DPH / VAT ID (if VAT payer):</Text> {currentRecord?.clientId?.ic_dph || "____"}
            </Text>
          </View>
        </View>

        {/* Delivery Address */}
        <View style={{ ...styles.section, marginBottom: 20 }}>
          <Text style={styles.text}>
            <Text style={styles.textBold}>
              Dodacia adresa / Delivery address :
            </Text>
          </Text>
          <Text style={styles.text}>
            {currentRecord.shippingAddress}, {currentRecord.town}, {currentRecord.postCode}
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
            <Text style={styles.tableCell}>PRODUKT / PRODUCT</Text>
            <Text style={styles.tableCell}>MNOŽSTVO / QTY</Text>
            <Text style={styles.tableCell}>CENA / PRICE</Text>
            <Text style={styles.tableCell}>SPOLU / TOTAL</Text>
          </View>

          {/* Gear Product */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCellDark}>
              {currentRecord.gearMarketplaceId.name} / Gear Product
            </Text>
            <Text style={styles.tableCellDark}>1 ks/pc</Text>
            <Text style={styles.tableCellDark}>€{gearPrice.toFixed(2)}</Text>
            <Text style={styles.tableCellDark}>€{gearPrice.toFixed(2)}</Text>
          </View>

          {/* Shipping */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCellDark}>
              Preprava / Shipping ({currentRecord.gearMarketplaceId.shippingCompany.name})
            </Text>
            <Text style={styles.tableCellDark}>1 ks / pc</Text>
            <Text style={styles.tableCellDark}>€{shippingPrice.toFixed(2)}</Text>
            <Text style={styles.tableCellDark}>€{shippingPrice.toFixed(2)}</Text>
          </View>

          {/* Platform Commission - Only show if greater than 0 */}
          {platformCommission > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCellDark}>
                Servisný poplatok / Service Fee (Commission)
              </Text>
              <Text style={styles.tableCellDark}>1 ks / pc</Text>
              <Text style={styles.tableCellDark}>€{platformCommission.toFixed(2)}</Text>
              <Text style={styles.tableCellDark}>€{platformCommission.toFixed(2)}</Text>
            </View>
          )}
        </View>

        {/* Subtotal and Total */}
        <View style={{ ...styles.section, marginTop: 50, alignItems: "flex-end" }}>
          <Text style={{ ...styles.text, marginBottom: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#000000" }}>MEDZISÚCET / </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>SUBTOTAL: </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>
              €{subtotal.toFixed(2)}
            </Text>
          </Text>
          <Text style={{ ...styles.text, marginBottom: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#000000" }}>DPH ({vatPercentage}%) / </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>VAT ({vatPercentage}%): </Text>
            <Text style={{ fontWeight: "bold", color: "#ad2b08" }}>
              €{vatAmount.toFixed(2)}
            </Text>
          </Text>
          <Text
            style={{
              ...styles.text,
              backgroundColor: "#ad2b08",
              color: "white",
              padding: 8,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 5,
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            <Text>SPOLU / TOTAL: </Text>
            <Text>€{total.toFixed(2)}</Text>
          </Text>
        </View>

        {/* Footer */}
        <View style={{ ...styles.section, textAlign: "center", marginTop: 80 }}>
          <Text style={styles.text}>
            Táto faktúra bola automaticky vygenerovaná prostredníctvom platformy frafol.sk.
          </Text>
          <Text style={{ ...styles.text, color: "#ad2b08" }}>
            This invoice was automatically generated via the platform frafol.sk.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceGearFromClientSide;