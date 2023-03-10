import { Toggle } from "@geist-ui/core"
import classNames from "classnames"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const ForienToggle = () => {
    const router = useRouter();
    return (
        <label
            className={classNames(
                'max-w-full w-fit',
                'flex',
                'items-center',
            )}>
            <div className={classNames('leading-none')}>kr</div>
            <Toggle 
            type="secondary"
            initialChecked = {router.pathname === "/en" ? true : false}
            onChange={(e) => {
                e.preventDefault();
                router.push(e.target.checked ? '/en' : '/')
            }} />
            <div className={classNames('leading-none')}>en</div>
        </label>
    )
}