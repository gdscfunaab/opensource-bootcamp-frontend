<template>
    <AuthLoginform/>
</template>

<script>
export default {
     middleware: ["auth"],
}
</script>