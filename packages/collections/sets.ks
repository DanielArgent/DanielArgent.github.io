type Set[T] < List[T] {
    fun add!(...args) {
        for arg in args {
            if not this.contains?(arg){
                base(arg)
            }
        }
    }
                
    fun to_s() {
        "{ #{this.join(", ")} }"
    }        
}
