Vue.component('component-one', {
    template: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur distinctio itaque magni minima praesentium reiciendis vel voluptate voluptates? Aliquam beatae error eveniet explicabo fuga iusto laudantium minima qui quia, vel.</div>',
});
Vue.component('component-two', {
    template: '<div>Lorem iconsectetur adipisicing elit. Consectetur distinctio itaque magni minima praesentium reiciendis vel voluptate voluptates? Aliquam beatae error eveniet explicabo fuga iusto</div>',
});
Vue.component('component-three', {
    template: '<div>Lorem ipsum dolor sit amet,tur distinctioma praesentium reiciendis vel voluptate voluptates? Aliquam beatae error minima qui quia, vel.</div>',
});

const childElement = {
    name: 'child-element',
    template: '<p>some string in child component</p>'
};

Vue.component('some-el', {
    props: ['title', 'counter'],
    data() {
        return {

        };
    },
    methods: {
        some() {
            console.log('some child');
            return `i'm some method`;
        }
    },
    components: {
        childElement,
    },
    mounted() {
        console.log('some-el child', this);
        this.some();
        this.$root.some();
        this.$parent.some();
    },
    template: `<div>
                    <div>{{ title }}</div>
                    <div>{{ counter }}</div>
                    <div>{{ some() }}</div>
                    <slot>
                        <p>Default text</p>
                    </slot>
                    <button @click="$emit('increase', $event)">Increase</button>
                    <child-element/>
               </div>`,
});
