<template>
    <div>
        <PageLoader />
        <Layout />
        <QuickUser />
        <Scrolltop />
    </div>
</template>
<script>
import Layout from "../components/Layout";
import PageLoader from "../components/PageLoader";
import QuickUser from "../components/QuickUser";
import Scrolltop from "../components/Scrolltop";
export default {
    name: "Templates",
    components: {
        Layout,
        PageLoader,
        QuickUser,
        Scrolltop
    }
};
</script>
