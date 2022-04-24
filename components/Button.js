import React from 'react';
import { Button } from 'antd';

const ButtonAntd = (props) => {
    return (
        <Button type={props.type} name={props.name}>{props.children}</Button>
    )
}
export default React.memo(ButtonAntd);