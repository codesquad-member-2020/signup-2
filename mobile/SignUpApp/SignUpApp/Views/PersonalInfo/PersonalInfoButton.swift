//
//  PersonalInfoButton.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PersonalInfoButton: UIButton {
    
    private let keyColor = UIColor(named: "KeyColor")
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        layer.borderColor = UIColor.darkGray.cgColor
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        setTitleColor(keyColor, for: .normal)
    }
}
