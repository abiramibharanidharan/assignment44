
function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<(num: number) => number>

    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}
@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class MethodDecoratorExample {
    @MethodDecorator
    method(num: number): number {
        return 0;
}

}

