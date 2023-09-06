const Tutorial = {
    data(){
        return {
            tata: "u",
            
        }

    },
    created(){
        fetch(url)
        .then(res => res.json())
        .then(res => {this.truc = res})
    }
}