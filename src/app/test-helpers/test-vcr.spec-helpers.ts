/* istanbul ignore file */

import { ViewContainerRef } from '@angular/core';

export class TestViewContainerRef extends ViewContainerRef {
	get element(): import('@angular/core').ElementRef {
		throw new Error('Method not implemented.');
	}
	get injector(): import('@angular/core').Injector {
		throw new Error('Method not implemented.');
	}
	get parentInjector(): import('@angular/core').Injector {
		throw new Error('Method not implemented.');
	}
	clear(): void {
		return undefined;
	}
	get(index: number): import('@angular/core').ViewRef {
		throw new Error('Method not implemented.');
	}
	get length(): number {
		throw new Error('Method not implemented.');
	}
	// @ts-ignore
	createEmbeddedView<C>(
		templateRef: import('@angular/core').TemplateRef<C>,
		context?: C,
		index?: number,
	): import('@angular/core').EmbeddedViewRef<C> {
		throw new Error('Method not implemented.');
	}
	// @ts-ignore
	createComponent<C>(
		componentFactory: import('@angular/core').ComponentFactory<C>,
		index?: number,
		injector?: import('@angular/core').Injector,
		projectableNodes?: any[][],
		ngModule?: import('@angular/core').NgModuleRef<any>,
	) {
		return undefined;
	}
	insert(viewRef: import('@angular/core').ViewRef, index?: number): import('@angular/core').ViewRef {
		throw new Error('Method not implemented.');
	}
	move(viewRef: import('@angular/core').ViewRef, currentIndex: number): import('@angular/core').ViewRef {
		throw new Error('Method not implemented.');
	}
	indexOf(viewRef: import('@angular/core').ViewRef): number {
		throw new Error('Method not implemented.');
	}
	remove(index?: number): void {
		throw new Error('Method not implemented.');
	}
	detach(index?: number): import('@angular/core').ViewRef {
		throw new Error('Method not implemented.');
	}
}
