## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export class MatTabGroupHarness extends ComponentHarness {
    getSelectedTab(): Promise<MatTabHarness>;
    getTabs(filter?: TabHarnessFilters): Promise<MatTabHarness[]>;
    static hostSelector: string;
    selectTab(filter?: TabHarnessFilters): Promise<void>;
    static with(options?: TabGroupHarnessFilters): HarnessPredicate<MatTabGroupHarness>;
}

// @public
export class MatTabHarness extends ContentContainerComponentHarness<string> {
    getAriaLabel(): Promise<string | null>;
    getAriaLabelledby(): Promise<string | null>;
    // @deprecated
    getHarnessLoaderForContent(): Promise<HarnessLoader>;
    getLabel(): Promise<string>;
    // (undocumented)
    protected getRootHarnessLoader(): Promise<HarnessLoader>;
    getTextContent(): Promise<string>;
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    select(): Promise<void>;
    static with(options?: TabHarnessFilters): HarnessPredicate<MatTabHarness>;
}

// @public
export class MatTabLinkHarness extends ComponentHarness {
    click(): Promise<void>;
    getLabel(): Promise<string>;
    static hostSelector: string;
    isActive(): Promise<boolean>;
    isDisabled(): Promise<boolean>;
    static with(options?: TabLinkHarnessFilters): HarnessPredicate<MatTabLinkHarness>;
}

// @public
export class MatTabNavBarHarness extends ComponentHarness {
    clickLink(filter?: TabLinkHarnessFilters): Promise<void>;
    getActiveLink(): Promise<MatTabLinkHarness>;
    getLinks(filter?: TabLinkHarnessFilters): Promise<MatTabLinkHarness[]>;
    static hostSelector: string;
    static with(options?: TabNavBarHarnessFilters): HarnessPredicate<MatTabNavBarHarness>;
}

// @public
export interface TabGroupHarnessFilters extends BaseHarnessFilters {
    selectedTabLabel?: string | RegExp;
}

// @public
export interface TabHarnessFilters extends BaseHarnessFilters {
    label?: string | RegExp;
}

// @public
export interface TabLinkHarnessFilters extends BaseHarnessFilters {
    label?: string | RegExp;
}

// @public
export interface TabNavBarHarnessFilters extends BaseHarnessFilters {
}

// (No @packageDocumentation comment for this package)

```