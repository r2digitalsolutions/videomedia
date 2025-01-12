import type { ToolbarItem } from "$lib/components/Toolbar/type";
import { genericCommand } from "$lib/utils/generic";
import { FolderOpen, Save, Download, HelpCircle } from "lucide-svelte";
import { shortcut_store } from "../stores";

export const menu: ToolbarItem[] = [
  {
    type: 'dropdown',
    label: 'File',
    items: [
      {
        label: 'New Project',
        shortcut: genericCommand('{command}N'),
        onclick: () => { }
      },
      {
        type: 'button',
        label: 'Open Project...',
        shortcut: genericCommand('{command}O'),
        icon: FolderOpen,
        disabled: true,
        onclick: () => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.itxvision';
          input.click();
        }
      },
      { type: 'separator' },
      {
        type: 'button',
        label: 'Load Project',
        shortcut: genericCommand('{command}O'),
        icon: FolderOpen,
        onclick: () => { }
      },
      {
        type: 'button',
        label: 'Save Project',
        shortcut: genericCommand('{command}S'),
        icon: Save,
        onclick: () => { }
      },
      {
        label: 'Save As...',
        shortcut: genericCommand('⇧{command}S'),
        disabled: true,
        onclick: () => alert('Save As coming soon')
      },
      { type: 'separator' as const },
      {
        label: 'Export',
        shortcut: genericCommand('{command}E'),
        icon: Download,
        onclick: () => { }
      }
    ]
  },
  {
    type: 'dropdown',
    label: 'Edit',
    items: [
      {
        label: 'Edit variables',
        onclick: () => { },
        shortcut: genericCommand('{command}.')
      },
      { type: 'separator' as const },
      {
        label: 'Undo',
        shortcut: genericCommand('{command}Z'),
        onclick: () => alert('Undo coming soon'),
        disabled: true
      },
      {
        label: 'Redo',
        shortcut: genericCommand('⇧{command}Z'),
        onclick: () => alert('Redo coming soon'),
        disabled: true
      },
      { type: 'separator' as const },
      {
        label: 'Cut',
        shortcut: genericCommand('{command}X'),
        onclick: () => alert('Cut coming soon'),
        disabled: true
      },
      {
        label: 'Copy',
        shortcut: genericCommand('{command}C'),
        onclick: () => alert('Copy coming soon'),
        disabled: true
      },
      {
        label: 'Paste',
        shortcut: genericCommand('{command}V'),
        onclick: () => alert('Paste coming soon'),
        disabled: true
      }
    ]
  },
  {
    type: 'dropdown',
    label: 'View',
    items: [
      {
        label: 'Zoom In',
        shortcut: genericCommand('{command}+'),
        onclick: () => alert('Zoom In coming soon'),
        disabled: true
      },
      {
        label: 'Zoom Out',
        shortcut: genericCommand('{command}-'),
        onclick: () => alert('Zoom Out coming soon'),
        disabled: true
      },
      {
        label: 'Reset Zoom',
        shortcut: genericCommand('{command}0'),
        onclick: () => alert('Reset Zoom coming soon'),
        disabled: true
      },
      { type: 'separator' as const },
      {
        label: 'Toggle Timeline',
        shortcut: genericCommand('{command}T'),
        onclick: () => alert('Toggle Timeline coming soon'),
        disabled: true
      }
    ]
  },
  {
    type: 'dropdown',
    label: 'Help',
    items: [
      {
        label: 'Documentation',
        icon: HelpCircle,
        onclick: () => alert('Documentation coming soon'),
        disabled: true
      },
      {
        label: 'Keyboard Shortcuts',
        shortcut: genericCommand('{command}/'),
        onclick: shortcut_store.onOpen
      },
      { type: 'separator' as const },
      {
        label: 'About ITXVision',
        onclick: () => alert('About coming soon'),
        disabled: true
      }
    ]
  }
];