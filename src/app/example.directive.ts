import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[exSelector]'
})

export class ExampleDirective {

    @HostBinding('class.is-example') isExample = true;
    @HostBinding('class.is-example-hovering') hovering = false;
    @HostListener('mouseenter') onmouseenter() {
        this.hovering = true;
    }
    @HostListener('mouseleave') onmouseleave() {
        this.hovering = false;
    }
    @Input() set exSelector(value) {
        this.isExample = value;
    }
}