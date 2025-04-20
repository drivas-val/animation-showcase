#!/usr/bin/env python3

import os
import datetime
import mimetypes
import sys

# Configuration
OUTPUT_FILE = "all_files_content.txt"
EXCLUDED_DIRS = ['.git', 'node_modules', '__pycache__', 'venv', '.idea', '.vscode']
EXCLUDED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.ico', 
                      '.mp3', '.mp4', '.avi', '.mov', '.flv', '.wmv', '.zip', 
                      '.tar', '.gz', '.rar', '.exe', '.dll', '.pyc', '.pyo', 
                      '.o', '.so']

def is_text_file(file_path):
    """Check if a file is a text file based on its mime type or extension."""
    mime_type, _ = mimetypes.guess_type(file_path)
    
    # Check if it's explicitly a binary file by extension
    _, ext = os.path.splitext(file_path)
    if ext.lower() in EXCLUDED_EXTENSIONS:
        return False
    
    # If we can determine it's a text file from mime type
    if mime_type and mime_type.startswith('text/'):
        return True
    
    # Try to open and read a small part of the file
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            f.read(1024)
        return True
    except UnicodeDecodeError:
        return False

def should_process_file(file_path):
    """Determine if a file should be processed."""
    # Skip the output file itself
    if os.path.basename(file_path) == OUTPUT_FILE:
        return False
        
    # Skip hidden files and directories
    if os.path.basename(file_path).startswith('.'):
        return False
        
    # Check if file is in excluded directory
    for excluded_dir in EXCLUDED_DIRS:
        if excluded_dir in file_path.split(os.sep):
            return False
    
    # Check if it's a text file
    return is_text_file(file_path)

def process_directory(directory='.'):
    """Process all files in a directory and its subdirectories."""
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as output:
        # Write header
        output.write("# File Contents Collection\n")
        output.write(f"# Generated on {datetime.datetime.now()}\n")
        output.write(f"# Current directory: {os.path.abspath(directory)}\n\n")
        
        # Walk through all files and directories
        for root, dirs, files in os.walk(directory):
            # Skip excluded directories
            dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS and not d.startswith('.')]
            
            # Process each file
            for file in sorted(files):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, directory)
                
                if should_process_file(file_path):
                    try:
                        print(f"Processing: {rel_path}")
                        
                        # Write file header
                        output.write(f"\n\n---------------------------------------\n")
                        output.write(f"File: {rel_path}\n")
                        output.write(f"---------------------------------------\n\n")
                        
                        # Write file content
                        with open(file_path, 'r', encoding='utf-8') as f:
                            output.write(f.read())
                    except Exception as e:
                        print(f"Error processing {rel_path}: {str(e)}")

if __name__ == "__main__":
    # Use command line argument as directory if provided, otherwise use current directory
    directory = sys.argv[1] if len(sys.argv) > 1 else '.'
    
    print(f"Starting to gather file contents from: {directory}")
    print(f"Output will be saved to: {OUTPUT_FILE}")
    
    process_directory(directory)
    
    print(f"Done! All file contents have been saved to {OUTPUT_FILE}")