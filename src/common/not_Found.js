import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
// import "../../scss/notFound.scss"

export function NotFound(props) {
    const history = useHistory();

    const handleGoHome = () => {
        history.push("/admin/dashboard");
    }

    return (
        <>
            <div className="backgroundNotFound">
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" onClick={() => handleGoHome()}>Back Home</Button>}
                />
            </div>
        </>
    );
}
