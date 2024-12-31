<script lang="ts">
	import Header from '../../components/dynamic/Header.svelte';
	import Navigation from '../../components/dynamic/Navigation.svelte';

	let { children } = $props();
</script>

<section class="flex flex-col h-screen justify-between relative">
    <Header />
        {@render children()}
    <Navigation />
</section>