import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ComponentsList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        if (child.type === Component) {
            return React.cloneElement(
                child,
                { ...child.props, num: index + 1 }
                // <div
                //     style={{
                //         display: "flex"
                //     }}
                // >
                //     {String(index + 1) + "\u00A0" + "\u00A0" + "\u00A0"}
                //     {child}
                // </div>
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
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Component.propTypes = {
    num: PropTypes.string
};

export default ChildrenExercise;
