export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter a ${propertyKey}`)

        const getter =  function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemnto no DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}