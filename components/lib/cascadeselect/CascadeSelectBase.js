import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState, overlayVisibleState }) =>
        classNames(
            'p-cascadeselect p-component p-inputwrapper',
            {
                'p-disabled': props.disabled,
                'p-focus': focusedState,
                'p-inputwrapper-filled': props.value,
                'p-inputwrapper-focus': focusedState || overlayVisibleState
            },
            props.className
        ),
    label: ({ props, label }) =>
        classNames('p-cascadeselect-label ', {
            'p-placeholder': label === props.placeholder,
            'p-cascadeselect-label-empty': !props.value && label === 'p-emptylabel'
        }),
    list: ({ context }) =>
        classNames('p-cascadeselect-panel p-cascadeselect-items', {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    sublist: 'p-cascadeselect-panel p-cascadeselect-items p-cascadeselect-sublist',
    item: ({ option, isOptionGroup, activeOptionState }) =>
        classNames('p-cascadeselect-item', {
            'p-cascadeselect-item-group': isOptionGroup(option),
            'p-cascadeselect-item-active p-highlight': activeOptionState === option
        }),
    dropdownIcon: 'p-cascadeselect-trigger-icon',
    dropdownButton: 'p-cascadeselect-trigger',
    wrapper: 'p-cascadeselect-items-wrapper',
    panel: 'p-cascadeselect-panel p-component',
    content: 'p-cascadeselect-item-content',
    optionGroupIcon: 'p-cascadeselect-group-icon',
    text: 'p-cascadeselect-item-text',
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    
    .p-cascadeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    
    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    .p-cascadeselect .p-cascadeselect-panel {
        min-width: 100%;
    }
    
    .p-cascadeselect-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-cascadeselect-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
    }
    
    .p-cascadeselect-item-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-cascadeselect-group-icon {
        margin-left: auto;
    }
    
    .p-cascadeselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        min-width: 100%;
    }
    
    .p-fluid .p-cascadeselect {
        display: flex;
    }
    
    .p-fluid .p-cascadeselect .p-cascadeselect-label {
        width: 1%;
    }
    
    .p-cascadeselect-sublist {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }
    
    .p-cascadeselect-item-active {
        overflow: visible;
    }
    
    .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        display: block;
        left: 100%;
        top: 0;
    }
}
`;

export const CascadeSelectBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'CascadeSelect',
        appendTo: null,
        ariaLabelledBy: null,
        autoFocus: false,
        breakpoint: undefined,
        className: null,
        dataKey: null,
        disabled: false,
        dropdownIcon: null,
        id: null,
        inputId: null,
        inputRef: null,
        itemTemplate: null,
        name: null,
        onBeforeHide: null,
        onBeforeShow: null,
        onChange: null,
        onGroupChange: null,
        onHide: null,
        onShow: null,
        optionGroupChildren: null,
        optionGroupIcon: null,
        optionGroupLabel: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        placeholder: null,
        scrollHeight: '400px',
        style: null,
        tabIndex: null,
        transitionOptions: null,
        value: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
