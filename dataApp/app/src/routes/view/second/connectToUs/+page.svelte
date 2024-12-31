<script>
	import SendMessage from '../../../../components/static/SendMessage.svelte';
	import Text from "../../../../components/resuable/Text.svelte";
	import ContactInfo from '../../../../components/static/ContactInfo.svelte';

</script>


<section class="ml-5 mr-5 flex flex-col items-center lg:grid grid-cols-2">
    <section>
        <Text text = "Get in touch " className = "font-bold"/>
        <Text text = "we provide a services and you are free to connect to us via any means" />
    </section>
    <SendMessage />
    <ContactInfo />
</section>