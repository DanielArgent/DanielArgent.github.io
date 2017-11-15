type Tuple[T1, T2] {
    var it1
    var it2
    
    fun initialize(it1: T1, it2: T2) {
        this.it1 = it1
        this.it2 = it2
    }
    
    fun get_it1() {
        this.it1
    }
        
    fun get_it2() {
        this.it2
    }
    
    fun set_it1(value: T1) {
        this.it1 = value
    }
    
    fun set_it2(value: T2) {
        this.it2 = value
    }
    
    fun to_s() {
        "(#this.it1, #this.it2)"
    }
}
