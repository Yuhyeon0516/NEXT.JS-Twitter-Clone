'use client';

import { useRouter } from 'next/navigation';
import HomeComponent from '../_component/HomeComponent';

export default function Page() {
    const router = useRouter();
    router.replace('/i/flow/login');

    return <HomeComponent />;
}
