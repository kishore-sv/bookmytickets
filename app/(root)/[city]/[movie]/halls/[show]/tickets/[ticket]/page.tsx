"use client";

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '@/components/ticket/ticket';

const TicketPage = () => (
    <div className="w-full h-screen">
        <PDFViewer width="100%" height="100%">
            <MyDocument />
        </PDFViewer>
    </div>
);

export default TicketPage;
