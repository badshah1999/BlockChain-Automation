class Sample{
    elements={
        header:()=> cy.get("[class='font-h3']"),
        hashKeyHeader:() => cy.xpath("//div[@class='header']/following-sibling::div[@class='ins-and-outs']/div[@class='vins'][count(div[@class='vin']) = 1]"),
    }
    getHeader(){
        return this.elements.header()
    }
    getHashKeyHeader(){
        return this.elements.hashKeyHeader()
    }
}
export default new Sample()