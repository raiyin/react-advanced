import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
    const { isLoading, isError, data } = useSearchUsersQuery('vladilen');

    return (
        <div>
            home
        </div>
    );
};

export default HomePage;
