import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen";


export default function About() {
    const ref = useRef(null);

    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen]);

    return (
        <section
            className={cn("about-section", { "is-reveal": reveal })}
            data-scroll-section
        >
            <SectionHeader title="about" />
            <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi id nisl ultricies lacinia. Sed euismod, nisl ut  feugiat

            </p>
        </section>
    );
}