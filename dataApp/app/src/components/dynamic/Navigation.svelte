<script>
// @ts-nocheck

	import Text from './../resuable/Text.svelte';
    const navigation = [
        {
            icons: "icon",
            text: "Dashbaord",
            href: "/"
        },
        {
            icons: "icon",
            text: "Pricing",
            href: "/view/second/pricing"
        },
        {
            icons: "icon",
            text: "Contact",
            href: "/view/second/connectToUs"
        },
        {
            icons: "icon",
            text: "About",
            href: "/view/second/about"
        }
    ]
</script>

<section class="flex gap-5 bg-standard p-3 bottom-0 left-0 w-full z-10 fixed">
    {#each navigation as item}
        <section class="flex flex-col gap-2 text-center">
            <a href= {item.href}>{item.text}</a>
        </section>
    {/each}
</section>

