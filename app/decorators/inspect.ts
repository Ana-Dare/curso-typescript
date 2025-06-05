    export function inspect( // Passando a função direta sem parâmetros.
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value =  function (...args: any[]) {
            console.log(`--- Método ${propertyKey}`);
            console.log(`------parâmetros ${JSON.stringify(args)}`)
            const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(args)}`)
            return retorno;
        }

        return descriptor;
    }
