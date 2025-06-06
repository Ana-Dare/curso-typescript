export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter a ${propertyKey}`);

        let elemento: HTMLElement | null = null;

        const getter =  function() {
            if(!elemento) {
                elemento = document.querySelector(seletor) as HTMLElement;
                console.log(`buscando elemnto no DOM com o seletor
                ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}
