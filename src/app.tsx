import React from 'react';
import { createRoot } from 'react-dom/client';
import { Presentation, Slide, Text, Shape, Image, render } from "react-pptx";
import Preview from "react-pptx/preview";

function App() {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Welcome to Datato!</h2>
            <Preview slideStyle={{ border: '1px solid black' }}>
                <Presentation>
                    <Slide>
                        <Text
                            style={{
                                w: '100%',
                                h: '100%',
                                align: 'center',
                                verticalAlign: 'middle',
                                fontFace: 'Futura',
                                fontSize: 16,
                                bold: true,
                            }}
                        >
                            Slide 1
                        </Text>
                    </Slide>
                </Presentation>
            </Preview>
        </div>
    );
}

const root = createRoot(document.body);
root.render(<App />);