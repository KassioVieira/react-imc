import React from 'react';

import { Card } from './styles';

export default function Container({ children }) {
    return (
        <Card>{children}</Card>
    );
}
