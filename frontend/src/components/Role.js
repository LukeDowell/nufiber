import React from 'react';
import {useSelector} from "react-redux";

export default function Role(props) {
    const { userInfo } = useSelector((state) => state.userSignin)
    const { authorization, children } = props;
    return (
        <div>
            { userInfo && userInfo.role === authorization && (children) }
        </div>
    )
}
