import * as React from "react";

const Excel = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
    >
        <path
            d="M21.5 0h-19C1.1 0 0 .9 0 2v20c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM8 17H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1zm6 0h-3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zm6 0h-3c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1z"
            fill="#217346"
        />
    </svg>
);

export default Excel;