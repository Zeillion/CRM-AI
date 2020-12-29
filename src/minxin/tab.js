export const handleTab = {
    data() {
        return {
            activeName: 0
        }
    },
    methods: {
        // 切换tab
        changeTab(data) {
            this.activeName = data;
        },
    }

}