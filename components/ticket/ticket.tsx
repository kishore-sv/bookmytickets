import React from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    section: {
        width: "50%",
        height: 400,
        overflow: "hidden",
        padding: 10,
        marginLeft: 10,
        borderLeft:1,
        borderColor:"#a3a3a3"
    },
    image: {
        width: '100%',
        height: 400,
        objectFit: 'cover',
        borderRadius: "20px"
    },
    label: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: "bold",

    },
    secondary: {
        fontSize: 16,
        marginBottom: 3,
        color: "#a3a3a3"
    },
    seats: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: "bold",
        marginTop: 10
    },
    imageContainer: {
        width: "50%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        overflow: "hidden",
        marginLeft: '10px',        
    },
    ticketContainer: {
        width: "100%",
        height: "70%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    amount: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: 600
    },
    amountCont: {
        width: "100%",
        height: 50,
        backgroundColor: "#a3a3a3",
        padding: 6,
        flexDirection: "row",
        marginTop: 20,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    bookingId: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: "bold",
        marginTop: 10,
        backgroundColor:"#d4d4d4",
        borderRadius:4,
        padding:6
    }
});


export const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.header}>Your Movie Ticket</Text>

                <View style={styles.ticketContainer} >


                    <View style={styles.imageContainer} >
                        <Image
                            style={styles.image}
                            // src="https://image.tmdb.org/t/p/w500//3lwlJL8aW6Wor9tKvME8VoMnBkn.jpg"
                            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
                        />
                    </View>


                    <View style={styles.section}>
                        <Text style={styles.label}>Salaar: Cease Fire - Part 1 (A)</Text>
                        <Text style={styles.secondary}>June 30, 2025 | 7:30 PM</Text>
                        <Text style={styles.secondary}>PVR Orion Mall, Bengaluru</Text>
                        <Text style={styles.seats}>Seats: M10, M11</Text>
                        <Text style={styles.seats}>2 Ticket(s)</Text>
                        <Text style={styles.bookingId}>BOOKING ID:1871587</Text>
                        <View style={styles.amountCont}>
                            <Text style={styles.amount}>TOTAL AMOUNT :</Text>
                            <Text style={styles.amount}>Rs.600</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);
