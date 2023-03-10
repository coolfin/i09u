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
                'font-extralight',
            )}>
            <div className={classNames({'opacity-40' : router.pathname ==='/en'}, 'mx-3')}>kr</div>
            <Toggle 
            type="secondary"
            initialChecked = {router.pathname === "/en" ? true : false}
            onChange={(e) => {
                e.preventDefault();
                {e.target.checked ? router.push('/en') : router.back()}
            }} />
            <div className={classNames({'opacity-40' : router.pathname ==='/'}, 'mx-3')}>en</div>
        </label>
    )
}