import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import { User } from 'types/User';
import { SpringPage } from 'types/Vendor/spring';
import { requestBackend } from 'utils/requests';

function Users() {

    const [page, setPage] = useState<SpringPage<User>>();

    useEffect(() => {
        const params: AxiosRequestConfig = {
            url: '/users',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };
        requestBackend(params).then((response) => {
            setPage(response.data);
        });
    }, []);

    
    return (
        <div>
            {page?.content.map((item) => (
                <p key={item.id}>{item.email}</p>
            ))}
        </div>
    );
};
export default Users;