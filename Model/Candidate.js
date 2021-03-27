
class Candidate {

    livesWithChildren = false
    livesWithSenior = false
    livesWithChronicIllnessPatient = false
    livesWithRespIllnessPatient = false
    worksInHighRiskSetting = false

    isBIPOC = false

    hasDiseases = {
        lungDisease: false,
        heartDisease: false,
        hyperTension: false,
        highBloodPressure: false,
        diabetes: false
    }



    constructor(age, occupation, residence) {

        this.age = age
        this.occupation = occupation
        this.residence = residence

    }

    setLivesWithChildren(livesWithChild){
        this.livesWithChildren = livesWithChild
    }

    get getLivesWithChildren(){
        return this.livesWithChildren
    }

    setLivesWithSenior(livesWithSenior){
        this.livesWithSenior = livesWithSenior
    }

    get getLivesWithSenior(){
        return this.livesWithSenior
    }
    setLivesWithChronicIllness(livesWithChronicIllness){
        this.livesWithChronicIllnessPatient = livesWithChronicIllness
    }
    get getLivesWithChronicIllness(){
        return this.livesWithChronicIllnessPatient
    }
    setLivesWithRespIllness(livesWithRespIllness){
        this.livesWithRespIllnessPatient = livesWithRespIllness
    }
    get getLivesWithRespIllness(){
        return this.livesWithRespIllnessPatient
    }
    setWorksInHighRiskSetting(worksInHighRisk){
        this.worksInHighRiskSetting = worksInHighRisk
    }
    get getWorksInHighRiskSetting(){
        return this.worksInHighRiskSetting
    }

    setIsBIPOC(isBIPOC){
        this.isBIPOC = isBIPOC
    }
    get getIsBIPOC(){
        return this.isBIPOC
    }

    setDiseases(hasLD, hasHD, hasHT, hasHBP, hasD){
        this.hasDiseases["lungDisease"] = hasLD
        this.hasDiseases["heartDisease"] = hasHD
        this.hasDiseases["hyperTension"] = hasHT
        this.hasDiseases["highBloodPressure"] = hasHBP
        this.hasDiseases["diabetes"] = hasD
    }

    get getDiseases(){
        return this.hasDiseases
    }

}