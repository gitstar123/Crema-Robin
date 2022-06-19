import { GooglePayButton } from "@google-pay/button-react"
import React from "react";
import { Button } from "react-native";

export default function PaymentOptions () {

    return(
        <>
            <Button title="Pay With Gpay"></Button>
            <Button title="Pay With Paytm"></Button>
        </>
    )

}