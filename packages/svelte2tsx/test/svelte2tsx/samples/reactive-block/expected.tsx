<></>;function render() {

let a: 1 | 2 = 1;
() => {$: {
    console.log(a + 1);
}}
;
<></>
return { props: {}, slots: {} }}

export default class {
    $$prop_def = __sveltets_partial(render().props)
    $$slot_def = render().slots
}
