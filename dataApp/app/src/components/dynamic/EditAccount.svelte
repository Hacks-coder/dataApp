<script>
// @ts-nocheck

	import InputField from "../resuable/InputField.svelte";
	import Text from "../resuable/Text.svelte";
    const editAccount = [
        {text: "Name", type: "text", placeholder: "User name"},
        {text: "Email", type: "email", placeholder: "Email"},
        {text: "Password", type: "password", placeholder: "Password"},
        {text: "Phone", type: "number", placeholder: "Phone"},
    ]

</script>


<section>
    {#each editAccount as item}
        <form>
            <Text text = {item.text} />
            <InputField text = {item.type}   className = "bg-basic-100 w-72"/>
        </form>
    {/each}
</section>