import React from "react";
import Image from "next/image";

export default function Featured() {
    return (
        <section className="featured-section" data-scroll-container>
            <div className="featured-row-layout">
                <h6>LOOK 1</h6>
                <Image
                    src="https://balenciaga.dam.kering.com/m/7c6035cfc90ec789/Small-719341TNW621129_G.jpg?v=1"
                    alt="green"
                    width={500}
                    height={500}
                />
            </div>
            <div className="featured-column-layout">
                <h6>LOOK 2</h6>
                <Image
                    src="https://balenciaga.dam.kering.com/m/7352c6dd4d946358/Small-713677TNVD91070_G.jpg?v=3"
                    alt="lily"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}