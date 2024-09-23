/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ErrorHandler, NgModule, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

@NgModule({
  providers: [
    provideExperimentalZonelessChangeDetection(),
    {
      provide: ErrorHandler,
      useValue: {
        handleError: (e: any) => {
          throw e;
        },
      },
    },
  ],
})
export class TestModule {}

/*
 * Common setup / initialization for all unit tests in Angular Material and CDK.
 */
TestBed.initTestEnvironment(
  [BrowserDynamicTestingModule, TestModule],
  platformBrowserDynamicTesting(),
);

(window as any).module = {};
(window as any).isNode = false;
(window as any).isBrowser = true;
(window as any).global = window;
