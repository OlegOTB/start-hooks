import React from "react";
import CollapseWrapper from "../common/collapse";

const NumberList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        if (child.type === Component) {
            return (
                <div
                    style={{
                        display: "flex"
                    }}
                >
                    {String(index + 1) + "\u00A0" + "\u00A0" + "\u00A0"}
                    {child}
                </div>
            );
        }
        return null;
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumberList>
                <Component />
                <Component />
                <Component />
            </NumberList>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
