import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const [renderCount, setRenderCount] = useState(0);
    const someRef = useRef("someRef");
    useEffect(() => {
        setRenderCount((prevState) => prevState + 1);
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            {someRef.current}
            <p>render count: {renderCount}</p>
        </CardWrapper>
    );
};

export default RenderCountExample;
