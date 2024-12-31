<script>
	import Button from './../resuable/Button.svelte';
	import InputField from './../resuable/InputField.svelte';
	import Text from "../resuable/Text.svelte";

</script>
<form action="" class="w-fit p-5 bg-purple-900 rounded-xl mt-10 flex flex-col">
    <Text text = "Send us a message" />
    <InputField type = "text" placeholder = "Message Title" className = "w-72" />
    <textarea placeholder="Send us a message" class="w-72 h-48 mt-2"></textarea>
    <Button text = "Send" className = "bg-white w-72 h-10 text-black font-bold text-xl mt-2" />
</form>
