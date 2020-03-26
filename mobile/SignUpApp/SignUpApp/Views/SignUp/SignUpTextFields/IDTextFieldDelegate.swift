//
//  IDTextFieldDelegate.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/26.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class IDTextFieldDelegate: NSObject, UITextFieldDelegate {
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        print("Changing", textField.text)
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        print("END", textField.text)
    }
}
