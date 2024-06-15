/*
 * @Author: 陈超龙
 * @Date: 2024-06-16 02:03:26
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-16 02:03:47
 * @FilePath: \diy-element\postcss.config.cjs
 * @Version: 
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
/* eslint-env node */
module.exports = {
    plugins: [
        require("postcss-nested"),
        require("postcss-each-variables"),
        require("postcss-each")({
            plugins: {
                beforeEach: [require("postcss-for"), require("postcss-color-mix")],
            },
        }),
    ],
};